import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzfb64bla.css';
import '../../css/k/kbh20vd3x.css';
import '../../css/m/mexzrqjpi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzfb64bla"/><path class="kbh20vd3x"/><path class="mexzrqjpi"/>`,
		"fallback": "devicon:redhat",
	});
}

export default Component;
