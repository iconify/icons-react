import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awiyetucd.css';
import '../../css/s/sak0m1nef.css';
import '../../css/e/ef7x2zbjy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtCKZFemV"><g clip-rule="evenodd" class="awiyetucd"><path class="sak0m1nef"/><path class="ef7x2zbjy"/></g></mask></defs><path mask="url(#SVGtCKZFemV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vr-glasses",
	});
}

export default Component;
