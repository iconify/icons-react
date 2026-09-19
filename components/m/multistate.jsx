import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arshk1byu.css';
import '../../css/a/azu3q-bot.css';
import '../../css/b/bvy4f-bps.css';
import '../../css/p/pjr1tfbta.css';
import '../../css/v/v4i2ew1ke.css';
import '../../css/q/qadltybwf.css';
import '../../css/g/gb14rjbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="arshk1byu"/><path class="azu3q-bot"/><circle class="bvy4f-bps"/><circle class="pjr1tfbta"/><circle class="v4i2ew1ke"/><circle class="qadltybwf"/><circle class="gb14rjbkv"/>`,
		"fallback": "eos-icons:multistate",
	});
}

export default Component;
