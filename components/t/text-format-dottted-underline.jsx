import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ukcohknxc.css';
import '../../css/v/vydhux3pd.css';
import '../../css/f/f0xblvrjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ukcohknxc"/><path class="vydhux3pd"/><path class="f0xblvrjr"/></g>`,
		"fallback": "streamline-ultimate:text-format-dottted-underline",
	});
}

export default Component;
