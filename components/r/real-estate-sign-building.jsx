import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om9bawvpj.css';
import '../../css/m/mfimjqbqe.css';
import '../../css/e/e_kg60brd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om9bawvpj"/><path class="mfimjqbqe"/><path class="e_kg60brd"/>`,
		"fallback": "streamline-pixel:real-estate-sign-building",
	});
}

export default Component;
