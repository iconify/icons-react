import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jdqqmmn0f.css';
import '../../css/b/bk5i81qzz.css';
import '../../css/k/kzrcizbwo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jdqqmmn0f"/><circle class="bk5i81qzz"/><path class="kzrcizbwo"/></g>`,
		"fallback": "streamline:interface-setting-pie-chart-cog-setting-graph-cog",
	});
}

export default Component;
