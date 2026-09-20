import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioq770ctw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioq770ctw"/>`,
		"fallback": "streamline:phone-contact-phonebook-phonebook-phone-number-books-book",
	});
}

export default Component;
