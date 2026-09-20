import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgcz3obid.css';
import '../../css/x/x2jubyb5j.css';
import '../../css/l/lw8cyybyj.css';
import '../../css/h/h146d0q7z.css';
import '../../css/n/nmytwzbfj.css';

const viewBox = {"width":1435,"height":320};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgcz3obid"/><path class="x2jubyb5j"/><path class="lw8cyybyj"/><path class="h146d0q7z"/><path class="nmytwzbfj"/>`,
		"fallback": "thesvg:tpbank",
	});
}

export default Component;
