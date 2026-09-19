import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9hx4balk.css';
import '../../css/g/gx74lwb0e.css';
import '../../css/b/b3v177x2s.css';
import '../../css/n/n0ij7acao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9hx4balk"/><path class="gx74lwb0e"/><path class="b3v177x2s"/><path class="n0ij7acao"/>`,
		"fallback": "ion:levels",
	});
}

export default Component;
