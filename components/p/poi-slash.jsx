import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7pghdblc.css';
import '../../css/w/wu7dgpbsv.css';
import '../../css/b/b2tobl9de.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7pghdblc"/><path class="wu7dgpbsv"/><path class="b2tobl9de"/>`,
		"fallback": "gis:poi-slash",
	});
}

export default Component;
