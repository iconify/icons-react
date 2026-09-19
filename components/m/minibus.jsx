import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_14-901t.css';
import '../../css/n/njp6xqbwb.css';
import '../../css/i/il6z6ccrj.css';
import '../../css/x/xppoqqbzn.css';
import '../../css/e/en-l41blm.css';
import '../../css/v/vjgu4j5qx.css';
import '../../css/p/pm7jgczuf.css';
import '../../css/y/y9ul49bme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_14-901t"/><path class="njp6xqbwb"/><path class="il6z6ccrj"/><path class="xppoqqbzn"/><path class="en-l41blm"/><path class="vjgu4j5qx"/><path class="pm7jgczuf"/><path class="y9ul49bme"/>`,
		"fallback": "fxemoji:minibus",
	});
}

export default Component;
