import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnb9rgbxs.css';
import '../../css/c/ccei6lb9f.css';
import '../../css/e/epp456p3z.css';
import '../../css/n/ntvw1iazc.css';
import '../../css/s/smqoylb7r.css';
import '../../css/v/vrk1dsbdz.css';
import '../../css/f/f0m1ldlic.css';
import '../../css/z/zxq48tbnq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG8K2uJdUZ" class="xnb9rgbxs"/></defs><path class="ccei6lb9f"/><path class="epp456p3z"/><path class="ntvw1iazc"/><path class="smqoylb7r"/><path class="vrk1dsbdz"/><path class="f0m1ldlic"/><use href="#SVG8K2uJdUZ"/><use href="#SVG8K2uJdUZ"/><path class="zxq48tbnq"/>`,
		"fallback": "openmoji:person-with-medical-mask",
	});
}

export default Component;
