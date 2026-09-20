import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/s/suikfk.css';
import '../../css/c/chu5js.css';
import '../../css/o/oxx-om.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/d/d-jkxijw.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwcfCMe7n"><path class="c5xdmn suikfk"/><circle class="chu5js"/><path class="c5xdmn oxx-om t-ne3j"/></mask></defs><path mask="url(#SVGwcfCMe7n)" class="botfzx"/><path class="c5xdmn gd_4-q t-ne3j"/>`,
		"fallback": "line-md:map-marker-alt-off-loop",
	});
}

export default Component;
