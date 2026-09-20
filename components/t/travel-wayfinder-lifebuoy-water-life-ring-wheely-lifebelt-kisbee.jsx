import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kqf6v92ds.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/z/zbsejdb_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kqf6v92ds"/><circle class="xcv6q1bnv"/><circle class="zbsejdb_i"/></g>`,
		"fallback": "streamline:travel-wayfinder-lifebuoy-water-life-ring-wheely-lifebelt-kisbee",
	});
}

export default Component;
