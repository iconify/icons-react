import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z52-9jb7f.css';
import '../../css/a/a-salgpgm.css';
import '../../css/v/velahuttd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z52-9jb7f"/><path class="a-salgpgm"/><rect class="velahuttd"/></g>`,
		"fallback": "lucide:replace-all",
	});
}

export default Component;
