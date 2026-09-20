import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec7mc1bpe.css';
import '../../css/g/g6kyzbcgj.css';
import '../../css/k/kymmh3mru.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec7mc1bpe"/><path class="g6kyzbcgj"/><path class="kymmh3mru"/>`,
		"fallback": "vaadin:truck",
	});
}

export default Component;
