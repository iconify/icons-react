import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s_s7207zu.css';
import '../../css/z/zlu3s1tvg.css';
import '../../css/z/z9kwr8bqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="s_s7207zu"/><path class="zlu3s1tvg"/><path class="z9kwr8bqy"/></g>`,
		"fallback": "icon-park:voicemail",
	});
}

export default Component;
