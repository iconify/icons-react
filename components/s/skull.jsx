import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo_oyybjs.css';
import '../../css/z/zlb7djbvf.css';
import '../../css/q/qw-cj9sdx.css';
import '../../css/j/jo30azbdh.css';
import '../../css/v/v1f6m-udo.css';
import '../../css/a/a_eudeb9i.css';
import '../../css/h/hsi_mxotd.css';
import '../../css/r/r7e0egy4o.css';
import '../../css/h/h3q70abic.css';
import '../../css/g/gzplhlb3a.css';
import '../../css/e/ett8w1bsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo_oyybjs"/><path class="zlb7djbvf"/><path class="qw-cj9sdx"/><path class="jo30azbdh"/><path class="v1f6m-udo"/><path class="a_eudeb9i"/><path class="hsi_mxotd"/><path class="r7e0egy4o"/><path class="h3q70abic"/><path class="gzplhlb3a"/><path class="ett8w1bsm"/>`,
		"fallback": "streamline-emojis:skull",
	});
}

export default Component;
