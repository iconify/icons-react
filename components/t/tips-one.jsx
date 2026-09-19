import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/y/yy7ol1bks.css';
import '../../css/a/awl6u-98m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxM8OJbya"><g class="hv130ab-t"><path class="yy7ol1bks"/><path class="awl6u-98m"/></g></mask></defs><path mask="url(#SVGxM8OJbya)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tips-one",
	});
}

export default Component;
