import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-89ctltc.css';
import '../../css/u/u0q7hiszd.css';
import '../../css/k/ktk7rfg2u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGyTAqHegd" class="a-89ctltc"/></defs><path class="u0q7hiszd"/><use href="#SVGyTAqHegd" class="ktk7rfg2u"/><use href="#SVGyTAqHegd" class="ktk7rfg2u"/>`,
		"fallback": "gis:layer-alt-edit",
	});
}

export default Component;
