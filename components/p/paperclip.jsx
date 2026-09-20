import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc237m_zh.css';
import '../../css/i/i_kfg6brk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc237m_zh"/><path class="i_kfg6brk"/>`,
		"fallback": "streamline-emojis:paperclip",
	});
}

export default Component;
