import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/s/s0iank.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zyfiet.css';
import '../../css/o/oxx-om.css';
import '../../css/x/x1bqbh.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-u-uo_p.css';
import '../../css/d/d-5-a1ir.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKTzbTcTM"><path class="g26hbu s0iank t5pxry"/><path class="g26hbu zyfiet"/><path class="oxx-om t5pxry x1bqbh"/></mask></defs><path mask="url(#SVGKTzbTcTM)" class="botfzx"/><path class="gd_4-q t5pxry x1bqbh"/>`,
		"fallback": "line-md:volume-medium-off-filled",
	});
}

export default Component;
