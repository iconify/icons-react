import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eymyw677f.css';
import '../../css/v/vpnz75s-b.css';
import '../../css/p/pi64r-bsl.css';
import '../../css/r/rx29zkbat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKaxyDdKM"><g class="wwvp95byt"><path class="eymyw677f"/><path class="vpnz75s-b"/><path class="pi64r-bsl"/><circle class="rx29zkbat"/></g></mask></defs><path mask="url(#SVGKaxyDdKM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:led-diode",
	});
}

export default Component;
