import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e1eklgbft.css';
import '../../css/k/ktg4o2cns.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/y/yjfty0b5w.css';
import '../../css/t/tpu494b1c.css';
import '../../css/c/cm-n11bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e1eklgbft wm-deco"/><path class="ktg4o2cns wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k yjfty0b5w"/><path class="tpu494b1c wm-a"/><path class="cm-n11bue wm-k"/></g>`,
		"fallback": "withicons:snowman-blueprint",
	});
}

export default Component;
