import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/s/s22y7z9os.css';
import '../../css/y/yhov8zbzn.css';
import '../../css/d/dyfumibih.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="s22y7z9os"/><path class="yhov8zbzn"/><path class="dyfumibih"/>`,
		"fallback": "tabler-flags:iran",
	});
}

export default Component;
