import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/f/fjgje2bur.css';
import '../../css/v/vg0xcfubt.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGbJyS0cth"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="fjgje2bur"/><path class="vg0xcfubt"/></g></mask></defs><circle mask="url(#SVGbJyS0cth)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:times-circle-filled",
	});
}

export default Component;
