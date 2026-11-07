import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/j/jvb942cft.css';
import '../../css/e/ed0wiac1a.css';
import '../../css/r/r-yhzdbvh.css';
import '../../css/t/td25c2bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="jvb942cft"/><path class="ed0wiac1a"/><path class="r-yhzdbvh"/><path class="td25c2bwx"/>`,
		"fallback": "solar:server-bold-duotone",
	});
}

export default Component;
