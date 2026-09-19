import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7gfsbb7m.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/s/spxynnb0e.css';
import '../../css/p/p20qyyjsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c7gfsbb7m"/><circle class="f-ksdqydc"/><circle class="spxynnb0e"/><path class="p20qyyjsb"/>`,
		"fallback": "eva:message-square-outline",
	});
}

export default Component;
