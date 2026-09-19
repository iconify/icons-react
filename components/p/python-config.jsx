import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh7u9f3r.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nmjmojrlk.css';
import '../../css/s/s_619eb4q.css';
import '../../css/b/biiv_obtj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh7u9f3r"/><g class="t_2lkqbxb"><path class="nmjmojrlk"/><path class="s_619eb4q"/><path class="biiv_obtj"/></g>`,
		"fallback": "catppuccin:python-config",
	});
}

export default Component;
