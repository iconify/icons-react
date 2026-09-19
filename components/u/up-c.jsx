import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/okuvfmhmk.css';
import '../../css/t/tvgauyb5v.css';
import '../../css/s/secmbabyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGREtFiUFR"><g class="s9cl3zbei"><path clip-rule="evenodd" class="okuvfmhmk"/><path class="tvgauyb5v"/><path class="secmbabyc"/></g></mask></defs><path mask="url(#SVGREtFiUFR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:up-c",
	});
}

export default Component;
