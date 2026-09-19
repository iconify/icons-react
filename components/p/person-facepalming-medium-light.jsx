import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xag1dhbsb.css';
import '../../css/g/g4b8k2blr.css';
import '../../css/d/d_09owbxj.css';
import '../../css/z/z1dh3w1ka.css';
import '../../css/t/tfugkcb7x.css';
import '../../css/n/nmx-7q8uv.css';
import '../../css/i/isp3x9umd.css';
import '../../css/b/bupaf9diw.css';
import '../../css/f/f2egsuujx.css';
import '../../css/c/crckubbpe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xag1dhbsb"/><path class="g4b8k2blr"/><path class="d_09owbxj"/><path class="z1dh3w1ka"/><path class="tfugkcb7x"/><path class="nmx-7q8uv"/><path class="isp3x9umd"/><path class="bupaf9diw"/><path class="f2egsuujx"/><path class="crckubbpe"/></g>`,
		"fallback": "fluent-emoji-flat:person-facepalming-medium-light",
	});
}

export default Component;
