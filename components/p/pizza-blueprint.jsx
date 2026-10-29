import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ed06w55to.css';
import '../../css/t/tudl1g15c.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/a/adj9s5bss.css';
import '../../css/h/hci3ed7fh.css';
import '../../css/x/xqn7y1obx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ed06w55to wm-deco"/><path class="tudl1g15c wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="adj9s5bss wm-k"/><path class="hci3ed7fh wm-a"/><path class="wm-k xqn7y1obx"/></g>`,
		"fallback": "withicons:pizza-blueprint",
	});
}

export default Component;
