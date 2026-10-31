import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mdzm4op7h.css';
import '../../css/j/jlmitwbew.css';
import '../../css/z/zxr0f1bqq.css';
import '../../css/t/t6f90yb8d.css';
import '../../css/l/l0gk5x6bw.css';
import '../../css/g/ggoybqbjo.css';
import '../../css/h/h3a1tmbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mdzm4op7h"/><path class="jlmitwbew"/><path class="wm-shine zxr0f1bqq"/><path class="t6f90yb8d"/><path class="l0gk5x6bw"/><path class="ggoybqbjo"/><path class="h3a1tmbwx wm-shine"/></g>`,
		"fallback": "withicons-kawaii:puzzle-piece",
	});
}

export default Component;
