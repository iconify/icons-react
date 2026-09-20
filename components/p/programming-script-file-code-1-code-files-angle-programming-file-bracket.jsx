import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/isjpm0-jh.css';
import '../../css/z/zouhmv_ax.css';
import '../../css/g/gn6i4kmum.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="isjpm0-jh"/><path class="zouhmv_ax"/><path class="gn6i4kmum"/></g>`,
		"fallback": "streamline:programming-script-file-code-1-code-files-angle-programming-file-bracket",
	});
}

export default Component;
