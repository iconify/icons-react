import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/t/tt3b6d.css';
import '../../css/s/s9nboe.css';
import '../../css/k/k2j92f.css';
import '../../css/x/xui0lb.css';
import '../../css/q/qic6az.css';
import '../../css/s/snke8u.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c tt3b6d"/><path class="a0m25c s9nboe"/><circle class="k2j92f xui0lb"/><circle class="k2j92f qic6az"/><circle class="k2j92f snke8u"/>`,
		"fallback": "line-md:mushroom",
	});
}

export default Component;
