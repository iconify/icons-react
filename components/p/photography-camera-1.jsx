import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saaufmbsj.css';
import '../../css/k/kl-9_wbua.css';
import '../../css/p/pgfaj-tpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saaufmbsj"/><path class="kl-9_wbua"/><path class="pgfaj-tpp"/>`,
		"fallback": "streamline-pixel:photography-camera-1",
	});
}

export default Component;
