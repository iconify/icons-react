import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/u/u76uq8b9q.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/a5khic22a.css';
import '../../css/j/j8nh6zbko.css';
import '../../css/o/og57rmbam.css';
import '../../css/n/nrsr34b0t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="u76uq8b9q"/><g class="x8poo_bjf"><path class="a5khic22a"/><path class="j8nh6zbko"/><path class="og57rmbam"/><path class="nrsr34b0t"/></g>`,
		"fallback": "openmoji:sleepy-face",
	});
}

export default Component;
