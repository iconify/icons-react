import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz1pwcbyv.css';
import '../../css/n/nyd7drbdm.css';
import '../../css/d/dyces3hqx.css';
import '../../css/q/qfaikbcyt.css';
import '../../css/a/aka35hb7t.css';
import '../../css/a/a21e8f75v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz1pwcbyv"/><path class="nyd7drbdm"/><path class="dyces3hqx"/><path class="qfaikbcyt"/><path class="aka35hb7t"/><path class="a21e8f75v"/>`,
		"fallback": "token:sys",
	});
}

export default Component;
