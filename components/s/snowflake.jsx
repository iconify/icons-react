import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fboa2bbqg.css';
import '../../css/m/mspcjjimr.css';
import '../../css/t/tx_-ynbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fboa2bbqg wm-k"/><path class="mspcjjimr wm-a"/><path class="tx_-ynbzk wm-deco"/></g>`,
		"fallback": "withicons-kawaii:snowflake",
	});
}

export default Component;
