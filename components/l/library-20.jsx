import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ni6vb5b.css';
import '../../css/e/edo682exk.css';
import '../../css/a/atrqkbbau.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ni6vb5b"/><path class="edo682exk"/><path class="atrqkbbau"/>`,
		"fallback": "energy-icons:library-20",
	});
}

export default Component;
