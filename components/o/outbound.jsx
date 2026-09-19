import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mjczpwbmh.css';
import '../../css/i/izvf6gbvk.css';
import '../../css/h/h79q5vbot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtpovBe8u"><g class="rohhhzb0l"><path class="mjczpwbmh"/><circle class="izvf6gbvk"/><path class="h79q5vbot"/></g></mask></defs><path mask="url(#SVGtpovBe8u)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:outbound",
	});
}

export default Component;
