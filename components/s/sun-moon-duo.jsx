import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi7wqmlfo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gt113sw9w.css';
import '../../css/q/qz3zmrb_d.css';
import '../../css/x/x8jl_gjqj.css';
import '../../css/i/ikdc4_mrh.css';
import '../../css/s/s_w1rsdac.css';
import '../../css/h/h4lc7sbna.css';
import '../../css/b/brbro2bte.css';
import '../../css/a/a3zvq63ak.css';
import '../../css/d/dwzbprblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xi7wqmlfo"/><g class="dt0cm9dhy primary"><path class="gt113sw9w"/><path class="qz3zmrb_d"/><path class="x8jl_gjqj"/><path class="ikdc4_mrh"/><path class="s_w1rsdac"/><path class="h4lc7sbna"/><path class="brbro2bte"/><path class="a3zvq63ak"/><path class="dwzbprblj"/></g>`,
		"fallback": "iconaut:sun-moon-duo",
	});
}

export default Component;
