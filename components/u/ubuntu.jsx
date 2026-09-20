import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vemjm8nfz.css';
import '../../css/i/iuvge1b8z.css';
import '../../css/h/hbl5-d2bc.css';
import '../../css/g/g-_-py2sf.css';
import '../../css/y/ygzgrcc7j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vemjm8nfz"/><circle class="iuvge1b8z"/><g id="SVGekoPYc2I"><circle class="hbl5-d2bc"/><path class="g-_-py2sf"/><circle class="ygzgrcc7j"/></g><use href="#SVGekoPYc2I" transform="rotate(120 50 50)"/><use href="#SVGekoPYc2I" transform="rotate(240 50 50)"/>`,
		"fallback": "thesvg-color:ubuntu",
	});
}

export default Component;
