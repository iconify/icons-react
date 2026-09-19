import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udsx6-bki.css';
import '../../css/e/ekgzxrzug.css';
import '../../css/w/wihj9hbfy.css';
import '../../css/m/m661pybpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udsx6-bki"/><path class="ekgzxrzug"/><path class="wihj9hbfy"/><g id="SVGJvzqlatq" transform="translate(276.9 261.5)scale(.33167)"><g id="SVGYvj3qb6R"><path id="SVGFvcHuSsa" transform="rotate(18 0 -200)" class="m661pybpj"/><use width="100%" height="100%" href="#SVGFvcHuSsa" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVGYvj3qb6R" transform="rotate(72)"/><use width="100%" height="100%" href="#SVGYvj3qb6R" transform="rotate(144)"/><use width="100%" height="100%" href="#SVGYvj3qb6R" transform="rotate(-144)"/><use width="100%" height="100%" href="#SVGYvj3qb6R" transform="rotate(-72)"/></g><use width="100%" height="100%" x="700" href="#SVGJvzqlatq" transform="translate(-550.9)"/>`,
		"fallback": "flag:st-1x1",
	});
}

export default Component;
