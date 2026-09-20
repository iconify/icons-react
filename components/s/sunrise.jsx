import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2fnftbaj.css';
import '../../css/u/u92ri5qvj.css';
import '../../css/p/pa7le0b0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2fnftbaj"/><path clip-rule="evenodd" class="u92ri5qvj"/><path class="pa7le0b0l"/>`,
		"fallback": "ix:sunrise",
	});
}

export default Component;
