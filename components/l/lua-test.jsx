import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/b/bko_cabbv.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/e/eggq918-u.css';
import '../../css/v/vkxno4e2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o58hkebvg"><path class="bko_cabbv"/><g class="j-npdpb0r"><path class="eggq918-u"/><path class="vkxno4e2f"/></g></g>`,
		"fallback": "catppuccin:lua-test",
	});
}

export default Component;
