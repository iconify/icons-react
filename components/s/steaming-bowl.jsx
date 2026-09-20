import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad9vde-d.css';
import '../../css/m/my9e3dkzb.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/tys-riorg.css';
import '../../css/p/plip7obcr.css';
import '../../css/r/rit23ppab.css';
import '../../css/u/u6xpit2om.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGNItmzdJR" class="mad9vde-d"/></defs><path class="my9e3dkzb"/><g class="rpvb-o6bq"><path class="tys-riorg"/><use href="#SVGNItmzdJR" class="plip7obcr"/><path class="rit23ppab"/></g><use href="#SVGNItmzdJR" class="u6xpit2om"/>`,
		"fallback": "openmoji:steaming-bowl",
	});
}

export default Component;
