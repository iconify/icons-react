import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fde0_4q6a.css';
import '../../css/z/z_1kwcpba.css';
import '../../css/c/cwm8rmbye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjZUWBcHI"><g class="ufeehvblu"><path class="fde0_4q6a"/><path clip-rule="evenodd" class="z_1kwcpba"/><path class="cwm8rmbye"/></g></mask></defs><path mask="url(#SVGjZUWBcHI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:open-door",
	});
}

export default Component;
