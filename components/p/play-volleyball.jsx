import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cflksfbjj.css';
import '../../css/n/n6jmq3bew.css';
import '../../css/j/jjq0_1y_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdz1AHbsC"><g class="ft5dv1b6b"><path class="cflksfbjj"/><path class="n6jmq3bew"/><path class="jjq0_1y_y"/></g></mask></defs><path mask="url(#SVGdz1AHbsC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play-volleyball",
	});
}

export default Component;
