import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuwmh7kqo.css';
import '../../css/u/u3429rr6n.css';
import '../../css/a/a6f2_gs4s.css';
import '../../css/w/wq2_0oeeg.css';
import '../../css/r/rtjr7_bcr.css';
import '../../css/v/vlf5fkwpk.css';
import '../../css/a/a5budkqqv.css';
import '../../css/y/yybyt_hcj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuwmh7kqo"/><path class="u3429rr6n"/><path class="a6f2_gs4s"/><path class="wq2_0oeeg"/><path class="rtjr7_bcr"/><path class="vlf5fkwpk"/><path class="a5budkqqv"/><path class="yybyt_hcj"/>`,
		"fallback": "tabler-flags:portugal",
	});
}

export default Component;
