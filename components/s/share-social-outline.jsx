import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmg2hgb8g.css';
import '../../css/d/dcxprjszn.css';
import '../../css/s/sjrvryb6o.css';
import '../../css/h/hgv60rb3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pmg2hgb8g"/><circle class="dcxprjszn"/><circle class="sjrvryb6o"/><path class="hgv60rb3g"/>`,
		"fallback": "ion:share-social-outline",
	});
}

export default Component;
