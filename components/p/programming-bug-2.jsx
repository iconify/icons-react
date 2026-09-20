import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/zytxhabmg.css';
import '../../css/w/w04oxtb6f.css';
import '../../css/s/s5lmtybxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="zytxhabmg"/><path class="w04oxtb6f"/><path class="s5lmtybxd"/></g>`,
		"fallback": "streamline-cyber:programming-bug-2",
	});
}

export default Component;
