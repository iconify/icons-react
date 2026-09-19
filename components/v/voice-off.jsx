import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k8g_49zqu.css';
import '../../css/x/xxd5vybut.css';
import '../../css/o/o86yh-b_x.css';
import '../../css/q/qcpaezwko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="k8g_49zqu"/><path class="xxd5vybut"/><path class="o86yh-b_x"/><path class="qcpaezwko"/></g>`,
		"fallback": "icon-park:voice-off",
	});
}

export default Component;
